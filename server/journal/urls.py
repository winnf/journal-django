from django.urls import path
from . import views

urlpatterns = [
    path('entries/', views.EntryView, name= 'entries_list'),
]