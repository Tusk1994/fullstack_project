from rest_framework import viewsets
from rest_framework.response import Response
from backend.news.serializers import SiteNewsSerializer, NewsCurrentSiteSerializer

from backend.news.models import site_news


class SitesNewsViewSet(viewsets.ViewSet):

    serializer_class = SiteNewsSerializer

    def list(self, request):
        serializer = SiteNewsSerializer(
            instance=site_news.values(), many=True)
        return Response(serializer.data)

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        news = site_news[int(pk)].parse()
        serializer = NewsCurrentSiteSerializer(
            instance=news.values(), many=True)
        return Response(serializer.data)

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass
