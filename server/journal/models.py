from django.db import models
from django.db.models.fields.files import ImageField

# Create your models here.

class Entry(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    date = models.DateField()
    image = models.ImageField(upload_to='media')

    def _str_(self):
        return self.title