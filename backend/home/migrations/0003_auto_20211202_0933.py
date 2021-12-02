# Generated by Django 2.2.24 on 2021-12-02 09:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_customtext_homepage'),
    ]

    operations = [
        migrations.CreateModel(
            name='Demo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('emailid', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='Test',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.EmailField(max_length=244)),
            ],
        ),
        migrations.AddField(
            model_name='homepage',
            name='username',
            field=models.TextField(blank=True, null=True),
        ),
    ]