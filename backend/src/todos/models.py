from django.db import models
from datetime import datetime
# Create your models here.

class Todo(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    is_completed = models.BooleanField(default=False)
    date_created = models.DateTimeField(default=datetime.now)

    def __str__(self):
        return self.title
