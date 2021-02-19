from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from django.contrib.auth.models import User
from .models import CustomUser
# , WishList, WishListCourse, PurchaseList, PurchasedCourse, BloggerBlogList, BlogListBlog

class CustomUserAdmin(admin.ModelAdmin):
    list_display = ['username', 'dob', 'photo']

admin.site.register(CustomUser, CustomUserAdmin)


# class ProfileInline(admin.StackedInline):
#     model = Profile

# class UserAdmin(BaseUserAdmin):
#     inlines = [ProfileInline]


# admin.site.unregister(User)
# admin.site.register(User, UserAdmin)
# class InstructorResumeAdmin(admin.ModelAdmin):
#     list_display = ['profile', 'major', 'status']
# Register your models here.
# admin.site.register(Profile, ProfileAdmin)
# admin.site.register(InstructorBankingInfo)
# admin.site.register(InstructorCoursesList)
# admin.site.register(InstructorResume, InstructorResumeAdmin)
# admin.site.register(InstructorReport)
# admin.site.register(PayPalInfo)
# admin.site.register(PaymentInfo)
# admin.site.register(CardPaymentInfo)
# admin.site.register(WishList)
# admin.site.register(WishListCourse)
# admin.site.register(PurchaseList)
# admin.site.register(PurchasedCourse)
# admin.site.register(BloggerBlogList)
# admin.site.register(BlogListBlog)
