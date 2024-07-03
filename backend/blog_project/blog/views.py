from rest_framework import viewsets
from .serializer import PostSerializer
from .models import Post

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer
