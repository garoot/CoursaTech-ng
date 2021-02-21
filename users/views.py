from django.shortcuts import render, redirect
# from django.http import HttpResponse, HttpResponseRedirect
# from .forms import LoginForm, UserRegistrationForm, UserUpdateForm
# from django.contrib.auth.decorators import login_required
# from django.contrib import messages
from .models import CustomUser
# from django.urls import reverse
from django.shortcuts import get_object_or_404
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import UpdateAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import AllowAny
from .serializers import CustomUserSerializer, ProfileSerializer, UsersSerializer, UserDetailSerializer



class UsersListView(ListCreateAPIView):
    permission_classes = [permissions.AllowAny,]

    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

class CustomUserCreate(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format='json'):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserDetailView(RetrieveUpdateDestroyAPIView):
    permission_classes = [AllowAny]

    serializer_class = UserDetailSerializer
    queryset = CustomUser.objects.all()

class ProfileUpdateView(UpdateAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = ProfileSerializer
    queryset = CustomUser.objects.all()
 