from .views import TodoViewSet
from rest_framework.routers import DefaultRouter




router = DefaultRouter()
router.register(r'', TodoViewSet, base_name='todos')
urlpatterns = router.urls


