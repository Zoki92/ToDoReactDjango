from rest_framework import serializers
from todos.models import Todo
from datetime import datetime


class TodoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Todo
        fields = ('id', 'title', 'content', 'is_completed','date_created',)