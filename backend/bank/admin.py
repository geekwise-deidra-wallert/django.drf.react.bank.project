from django.contrib import admin
from .models import Branch, Client, Product, Account

class BranchAdmin(admin.ModelAdmin):
    list_display = ('Branch', 'City')
admin.site.register(Branch,BranchAdmin)

class ClientAdmin(admin.ModelAdmin):
    list_display = ('Name', 'Email', 'Branch')
admin.site.register(Client, ClientAdmin)

class ProductAdmin(admin.ModelAdmin):
    list_display = ('Name','Default Account', 'Secondary Account', 'Credit Cards')
admin.site.register(Product, ProductAdmin)

class AccountAdmin(admin.ModelAdmin):
    list_display = ('Name', 'Default Account', 'Secondary Account', 'Credit Cards'. 'Balance')
admin.site.register(Account, AccountAdmin)
