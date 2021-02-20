from django.contrib import admin
from django.conf.urls import url, include
from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import CustomUserCreate, ProfileUpdateView, UsersListView, UserDetailView


app_name = 'users'

urlpatterns = [
    path('user/create/', CustomUserCreate.as_view(), name="create_user"),
    path('user/update/<int:pk>', ProfileUpdateView.as_view(), name="update_user" ),
    path('user/<int:pk>', UserDetailView.as_view(), name="get_user"),
    path('users/', UsersListView.as_view(), name="list_users" ),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('hello/', HelloWorldView.as_view(), name='hello_world')

    # url(r'^login/$', views.user_login, name='login'),
    # url(r'^logout/$', views.user_logout, name='logout'),
    # url(r'^register/$', views.register, name='register'),
    # url(r'^instructor_application/$', views.instructor_application,
    #     name='instructor_application'),
    # url(r'^dashboard/$', views.dashboard, name='dashboard'),
    # url(r'^edit_profile$', views.edit_profile, name='edit_profile'),
    # url(r'^list_applications$', views.list_applications, name='list_applications'),
    # url(r'^display_application/(?P<oid>[0-9]+)/$',
    #     views.display_application, name='display_application'),
    # url(r'^process_application/(?P<approved>[01])/(?P<oid>[0-9]+)/$',
    #     views.process_application, name='process_application'),
]
