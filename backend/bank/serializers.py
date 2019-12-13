from django.contrib.auth.models import User, Group
from rest_framework import serializers
from bank.models import Branch, Client

class UserSerializer( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = User
        fields = [
            'url',
            'username',
            'email',
            'groups'
        ]

class GroupSerializer( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = Group
        fields = [
            'url',
            'name',
        ]
class BranchSerializer( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = Branch
        fields = [
            'url',
            'branch_name',
            'city_params',
            'location_id',
        ]

class ClientSerializer( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = Client
        fields = [
            'url',
            'client_name',
            'client_email',
            'connect_to_branch'
        ]
