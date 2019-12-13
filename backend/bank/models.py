from django.db import models
import uuid

class Branch (models.Model):
    class Meta:
        verbose_name_plural = 'Branches'

    branch_name = models.CharField(max_length=25)
    location_city = (
        ('fresno', 'FRESNO'),
        ('clovis', 'CLOVIS'),
        ('madera', 'MADERA'),
    )
    city_params = models.CharField(
        max_length = 8,
        choices = location_city,
        default = location_city[0]
    )
    location_id = str(uuid.uuid4)

    def __str__(self):
        return (
            f"Bank Name : {self.branch_name} | Bank City : {self.city_params}"
            )

class Client (models.Model):

    client_name = models.CharField(
        max_length=50,
        default=''
        )
    client_email = models.CharField(
        max_length=50,
        default=''
        )
    
    connect_to_branch = models.ForeignKey(
        Branch,
        on_delete = models.CASCADE
    )

    def __str__(self):
        return(
            f"{self.client_name} | {self.connect_to_branch}"
        )

class Product(models.Model):
    
    default_account_types = (
        ('checking', 'CHECKING'),
        ('savings', 'SAVINGS'),
        ('none', 'NONE'),
    )
    default_account_params = models.CharField(
        max_length = 8,
        choices = default_account_types,
        default = default_account_types[0]
    )

    secondary_account_types = (
        ('checking', 'CHECKING'),
        ('savings', 'SAVINGS'),
        ('none', 'NONE'),
    )
    secondary_account_params = models.CharField(
        max_length = 8,
        choices = secondary_account_types,
        default = secondary_account_types[0]
    )
    credit_cards = (
        ('gold','GOLD'),
        ('silver','SILVER'),
        ('platinum','PLATINUM'),
        ('none', 'NONE')
    )
    credit_card_params = models.CharField(
        max_length = 8,
        choices = credit_cards,
        default = credit_cards[0]
    )
    connect_to_client = models.ForeignKey(
        Client,
        on_delete = models.CASCADE
    )

    def __str__(self):
        return (
            f"{self.connect_to_client} | {self.default_account_params} | {self.secondary_account_params} | {self.credit_card_params}"
        )

class Account (models.Model):
    connect_to_products = models.ForeignKey(
        Product,
        on_delete= models.CASCADE
    )
    connect_to_client = models.OneToOneField(
        Client, 
        on_delete = models.CASCADE
    )
    account_current_balance = models.FloatField(max_length=500, default='0.00')

    def __str__ (self):
        return (
            f"{self.connect_to_client} | {self.connect_to_products} | {self.account_current_balance}"
        )
