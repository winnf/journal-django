from django.shortcuts import render
from .serializers import EntrySerializer
from .models import Entry
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets

# Create your views here.

class EntryView(viewsets.ModelViewSet):

    serializer_class = EntrySerializer
    queryset = Entry.objects.all()

    # parser_classes = (MultiPartParser, FormParser)

    # def get(self, request, *args, **kwargs):
    #     entries = Entry.objects.all()
    #     serializer = EntrySerializer(entries, many=True)
    #     return Response(serializer.data)

    # def post(self, request, *args, **kwargs):
    #     entries_serializer = EntrySerializer(data=request.data)
    #     if entries_serializer.is_valid():
    #         entries_serializer.save()
    #         return Response(entries_serializer.data, status=status.HTTP_201_CREATED)
    #     else:
    #         print('error', entries_serializer.errors)
    #         return Response(entries_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


