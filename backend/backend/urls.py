from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from todo import views
from bank import views as bank_views

router = routers.DefaultRouter() 
router.register(r'todos', views.TodoView, 'todo')
router.register(r'users', bank_views.UserViewSet)
router.register(r'groups', bank_views.GroupViewSet)
router.register(r'branch', bank_views.BranchViewSet)
router.register(r'client', bank_views.ClientViewSet)
router.register(r'product', bank_views.ProductViewSet)
router.register(r'account', bank_views.AccountViewSet)

from django.views.generic.base import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # url('debug/', RedirectView.as_view(url='google.com', permanent=False), name='index'),
    path('', include('account.urls')),
    # path('groups/', include('account.urls')),
]
