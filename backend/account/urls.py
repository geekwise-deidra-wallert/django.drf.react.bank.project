from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI, PermissionAPI, AllPermissionsAPI, GroupAPI, PasswordAPIView
from knox import views as knox_views

urlpatterns = [
    path('auth', include('knox.urls')),
    path('auth/register', RegisterAPI.as_view()),
    path('auth/login', LoginAPI.as_view()),
    path('auth/user', UserAPI.as_view()),
    path('auth/permissions', PermissionAPI.as_view()),
    path('auth/all-permissions', AllPermissionsAPI.as_view()),
    path('auth/groups', GroupAPI.as_view()),
    path('auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('auth/passwords', PasswordAPIView.as_view(), name="password-detail")
]