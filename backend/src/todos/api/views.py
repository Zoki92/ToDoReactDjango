from rest_framework import generics, viewsets, permissions
from todos.models import Todo
from .serializers import TodoSerializer





class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()



