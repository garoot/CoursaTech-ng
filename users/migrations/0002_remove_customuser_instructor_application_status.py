# Generated by Django 3.1.6 on 2021-02-19 16:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='instructor_application_status',
        ),
    ]