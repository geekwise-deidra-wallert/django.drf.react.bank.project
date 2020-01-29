from django.contrib.auth.models import User, Group
from bank.models import Branch, Client, Product, Account
from rest_framework import viewsets, permissions
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404
from bank.serializers import BranchSerializer, ClientSerializer, ProductSerializer, AccountSerializer, UserSerializer, GroupSerializer

class UserViewSet ( viewsets.ModelViewSet ):
    """
        API endpoint that allows users to be viewed or edited
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class GroupViewSet ( viewsets.ModelViewSet ):
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
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = AccountSerializer

    def get_queryset(self):
        return self.request.user.holders.all()

    def perform_create(self, serializer):
        serializer.save(holder=self.request.user)
