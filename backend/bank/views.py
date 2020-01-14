from django.contrib.auth.models import User, Groups
from bank.models import Branch, Client, Product, Account
from rest_framework import viewsets
from bank.serializers import BranchSerializer, ClientSerializer, ProductSerializer, AccountSerializer, UserSerializer

class UserViewSet ( viewsets.ModelViewSet ):
    """
        API endpoint that allows users to be viewed or edited
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class GroupViewSet ( viewsets.ModelViewSet ):
    """
        API endpoint that allows users to be viewed or edited
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class BranchViewSet ( viewsets.ModelViewSet ):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer

class ClientViewSet ( viewsets.ModelViewSet ):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class ProductViewSet ( viewsets.ModelViewSet ):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class AccountViewSet ( viewsets.ModelViewSet ):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer