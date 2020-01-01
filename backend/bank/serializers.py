from django.contrib.auth.models import User, Group
from rest_framework import serializers
from bank.models import Branch, Client, Product, Account

class UserSerializer( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = User
        fields = [
            'id',
            'url',
            'username',
            'email',
            'groups'
        ]

class GroupSerializer( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = Group
        fields = [
            'id',
            'url',
            'name',
        ]

class BranchSerializer( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = Branch
        fields = [
            'id',
            'url',
            'branch_name',
            'location_city',
            'location_address'
            'location_id',
        ]

class ClientSerializer( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = Client
        fields = [
            'id',
            'url',
            'client_name',
            'client_email',
            'connect_to_branch'
        ]
class ProductSerializer( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = Product
        fields =  [
            'id',
            'url',
            'default_account_types',
            'connect_to_client'
        ]
class AccountSerializer( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = Account
        fields = [
            'id',
            'connect_to_products',
            'connect_to_client',
            'account_id'
        ]