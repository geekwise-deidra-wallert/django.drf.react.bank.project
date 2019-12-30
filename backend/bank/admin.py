from django.contrib import admin
from .models import Branch, Client, Product, Account

class BranchAdmin(admin.ModelAdmin):
    list_display = ('branch_name', 'location_city')
admin.site.register(Branch, BranchAdmin)

class ClientAdmin(admin.ModelAdmin):
    list_display = ('client_name', 'client_email', 'connect_to_branch')
admin.site.register(Client, ClientAdmin)

class ProductAdmin(admin.ModelAdmin):
    list_display = ('default_account_types')
admin.site.register(Product, ProductAdmin)

class AccountAdmin(admin.ModelAdmin):
    list_display = ('connect_to_client','account_id')
admin.site.register(Account, AccountAdmin)
