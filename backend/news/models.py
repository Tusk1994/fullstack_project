import feedparser


class SiteNews(object):
    def __init__(self, **kwargs):
        for field in ('id', 'name', 'url_rss'):
            setattr(self, field, kwargs.get(field, None))

    def parse(self):

        the_feeds = feedparser.parse(self.url_rss)
        dict_news = {}

        for n, the_feed in enumerate(the_feeds.entries):

            if n < 5:
                dict_news[n] = News(
                    title=the_feed.get("title", ""),
                    link=the_feed.get("link", ""),
                    description=the_feed.get("description", ""),
                    pubdate=the_feed.get("published", "")
                )

        return dict_news


class News(object):
    def __init__(self, **kwargs):
        for field in ('title', 'link', 'description', 'pubdate'):
            setattr(self, field, kwargs.get(field, None))


site_news = {
    1: SiteNews(id=1, name='3dnews', url_rss='https://3dnews.ru/software-news/rss/'),
    2: SiteNews(id=2, name='Lenta', url_rss='https://lenta.ru/rss/top7'),
    3: SiteNews(id=3, name='Yandex', url_rss='https://news.yandex.ru/auto.rss'),
    4: SiteNews(id=4, name='New York Times', url_rss='https://rss.nytimes.com/services/xml/rss/nyt/US.xml'),
    5: SiteNews(id=5, name='BBC', url_rss='http://feeds.bbci.co.uk/news/world/rss.xml'),
    6: SiteNews(id=6, name='Meduza', url_rss='https://meduza.io/rss/podcasts/meduza-v-kurse'),
}
