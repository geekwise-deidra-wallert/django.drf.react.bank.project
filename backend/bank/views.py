from django.contrib.auth.models import User, Group
from bank.models import Branch, Client
from rest_framework import viewsets
from bank.serializers import UserSerializer, GroupSerializer, BranchSerializer, ClientSerializer

class UserViewSet ( viewsets.ReadOnlyModelViewSet ):
    """
        API endpoint that allows users to be viewed or edited
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class GroupViewSet ( viewsets.ReadOnlyModelViewSet ):
    """
        API endpoint that allows users to be viewed or edited
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class BranchViewSet ( viewsets.ReadOnlyModelViewSet ):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer

class ClientViewSet ( viewsets.ReadOnlyModelViewSet ):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer