from rest_framework import serializers
from rest_framework.settings import api_settings


class SiteNewsSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=256)


class NewsCurrentSiteSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=256)
    link = serializers.CharField(max_length=256)
    description = serializers.CharField(max_length=256)
    pubdate = serializers.DateField(format="%d-%m-%Y")
