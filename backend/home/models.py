from django.conf import settings
from django.db import models


class HomePage(models.Model):
    "Generated Model"
    body = models.TextField()
    username = models.TextField(
        null=True,
        blank=True,
    )


class CustomText(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=150,
    )


class Test(models.Model):
    "Generated Model"
    user = models.EmailField(
        max_length=244,
    )


class Demo(models.Model):
    "Generated Model"
    emailid = models.EmailField(
        max_length=254,
    )
