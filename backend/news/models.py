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
                    description=the_feed.get("description", "")
                )

        return dict_news


class News(object):
    def __init__(self, **kwargs):
        for field in ('title', 'link', 'description'):
            setattr(self, field, kwargs.get(field, None))


site_news = {
    1: SiteNews(id=1, name='3dnews', url_rss='https://3dnews.ru/cpu/rss/'),
    2: SiteNews(id=2, name='Lenta', url_rss='https://lenta.ru/rss/top7'),
    3: SiteNews(id=3, name='Yandex', url_rss='https://news.yandex.ru/auto.rss'),
}
