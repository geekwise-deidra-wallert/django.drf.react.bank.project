from django.db import models
import uuid
from django.contrib.auth import authenticate


# class Auth (models.Model):
#     user = authenticate(username='', password='')
#     if user is not None:

#     else:

    

class Branch (models.Model):
    class Meta:
        verbose_name_plural = 'Branches'

    branch_name = models.CharField(max_length=100)
    location_city = models.CharField(max_length=100)
    location_address = models.CharField(max_length=100)
    location_id = str(uuid.uuid4())

    def __str__(self):
        return (
            f"Bank Name : {self.branch_name} | Bank City : {self.location_city}"
            )

class Client (models.Model):

    client_name = models.CharField(
        max_length=100,
        default=''
        )
        
    client_email = models.CharField(
        max_length=100,
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
        ('credit', 'CREDIT'),
        ('debit', 'DEBIT')
    )
    default_account_params = models.CharField(
        max_length = 8,
        choices = default_account_types,
        default = default_account_types[0]
    )
    connect_to_client = models.ForeignKey(
        Client,
        on_delete = models.CASCADE
    )

    def __str__(self):
        return (
            f"{self.connect_to_client} | {self.default_account_params}"
        )

class Account (models.Model):
    account_id = str(uuid.uuid4())

    connect_to_products = models.ForeignKey(
        Product,
        on_delete= models.CASCADE
    )
    connect_to_client = models.OneToOneField(
        Client, 
        on_delete = models.CASCADE
    )
    # account_current_balance = models.FloatField(max_length=500, default='0.00')

    def __str__ (self):
        return (
            f"{self.connect_to_client} | {self.account_id}| {self.default_account_params}"
        )