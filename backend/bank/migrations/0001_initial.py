# Generated by Django 2.2.7 on 2020-01-08 21:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Branch',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('branch_name', models.CharField(max_length=100)),
                ('location_city', models.CharField(max_length=100)),
                ('location_address', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name_plural': 'Branches',
            },
        ),
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('client_name', models.CharField(default='', max_length=100)),
                ('client_email', models.CharField(default='', max_length=100)),
                ('connect_to_branch', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bank.Branch')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('default_account_params', models.CharField(choices=[('checking', 'CHECKING'), ('savings', 'SAVINGS'), ('credit', 'CREDIT'), ('debit', 'DEBIT')], default=('checking', 'CHECKING'), max_length=8)),
                ('connect_to_client', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bank.Client')),
            ],
        ),
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('connect_to_client', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='bank.Client')),
                ('connect_to_products', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bank.Product')),
            ],
        ),
    ]
