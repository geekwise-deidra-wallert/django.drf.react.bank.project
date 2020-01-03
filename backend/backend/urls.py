"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from todo import views
from bank import views as bank_views

router = routers.DefaultRouter() 
router.register(r'todos', views.TodoView, 'todo')
# router.register(r'users', bank_views.UserViewSet)
# router.register(r'groups', bank_views.GroupViewSet)
router.register(r'branch', bank_views.BranchViewSet)
router.register(r'client', bank_views.ClientViewSet)
router.register(r'product', bank_views.ProductViewSet)
router.register(r'account', bank_views.AccountViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
