from django.urls import path
from . import views

urlpatterns = [
    path('entries/', views.EntryView.as_view(), name= 'entries_list'),
]