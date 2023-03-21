---
layout: post
title: Vad Elixir är och varför du ska använda det
slug: elixir-och-varfor-du-ska-anvanda-det
date: "2020-05-06"
description: Elixir är ett relativt nytt programmeringsspråk skapat av José Valim och lanserades 2011.
tags: [elixir, webapp, realtidsstöd]
og_image: /assets/blogg/elixir-featuredImage.jpg
---

**[Elixir](https/assets/blogg//elixir-lang.or/assets/blogg/) är ett relativt nytt programmeringsspråk skapat av José Valim och lanserades 2011. Det har snabbt blivit populärt av flera anledningar bland annat för dess enkelhet att utveckla i och att den körs på BEAM, Erlangs virtuella maskin, vilket ger en hög [driftsäkerhet.](https/assets/blogg//www.erlang-solutions.co/assets/blogg/blo/assets/blogg/which-companies-are-using-erlang-and-why-mytopdogstatus.html)**

För att ge bakgrunden till Elixir så börjar vi med att gå igenom Erlang. [Erlang](https/assets/blogg//www.erlang.or/assets/blogg/) skapades under 1980-talet på Ericsson för att användas i telefonväxlar där det finns höga krav på tillgänglighet och stabilitet samtidigt som man behöver hög prestanda. Det var då viktigt med robusthet inbyggt i språket redan från början. Robustheten får man till stor del från den egna processhanteringen där system ofta designas med massor av små processer som håller koll på sitt eget tillstånd och felhantering. Om en process får problem så startar Erlang automatiskt om den felande och relaterade processen för att återställa systemet till ett känt och fungerande tillstånd. Ett vanligt system kan bestå av 100-tals processer och det handlar inte om vanliga processer i operativsystemet utan Erlang har egna typer av processer som kräver mindre prestanda. Tack vare detta har Erlang länge varit ett vanligt språk för system som behöver routa stora mängder data, likt telefonväxlar, och används bland annat i [RabbitMQ](https/assets/blogg//www.rabbitmq.co/assets/blogg/) och till WhatsApp.

Andra viktiga komponenter i Erlang är variable/assets/blogg/värdens oföränderlighet, ett värde kommer aldrig kunna förändras i samma struktur utan man skapar istället nya variabler, och dess funktionella design. Detta gör att man helt kan undvika den typ av buggar där data oförklarligt ändras på något annat ställe i systemet. Dessa fördelar har sedan följt med som viktiga komponenter i Elixir. Dessutom bygger Elixir vidare på detta och ger ytterligare fördelar framförallt när det gäller verktyg kring utvecklings och produktionsmiljöer i form av verktyget [Mix](https/assets/blogg//elixir-lang.or/assets/blogg/getting-starte/assets/blogg/mix-ot/assets/blogg/introduction-to-mix.html). Det kan hantera allt från kodgenerering till hantering av beroenden, byggen och releaser. Med hjälp av verktyget går det lätt att hantera de flesta vanligt förekommande uppgifter relaterat till dessa områden.

Ett område där Elixir har hittat sin nisch är inbyggda syste/assets/blogg/IoT där projektet Nerves gjort det enkelt att använda Elixir för flera olika ändamål. Det används för både hobbyprojekt och av flera stora företag. Nerves gör det enklare att hantera och arbeta med dessa typer av system jämfört med /assets/blogg/C++.

Ett annat område där Elixir blivit uppskattat är i mer avancerade webbsystem, tack vare ramverken Phoenix och Ecto. Ecto används för att prata med databaser och har ett lättanvänt API för att interagera med databasen från en Elixir applikation. Phoenix är ett webbramverk som gör det enkelt att bygga olika typer av HTTP APIer.

Det som gör Phoenix speciellt, tack vare Elixir, är att det är enkelt att bygga tjänster med realtidsstöd via websockets. Denna typ av realtidsstöd är något som underlättar när flera användare ska samarbeta i en webbapp, till exempel ordbehandlingsprogram, då alla användare kan se vad de andra gör. En annan fördel med Phoenix är att man automatiskt får med övervakning av systemet i form av en dashboard men flera olika mätvärden som visas upp, något som sedan kan skickas vidare till externa system för övervakning om det finns på plats. Ytterligare en är Live View, som gör det möjligt att bygga dynamiska gränssnitt utan att behöva skriva frontend-kod, alla vyer renderas på servern som sedan använder websockets för att uppdatera det som visas i webbläsaren. Detta gör det mycket enklare att bygga moderna webbappar, även om det inte ger fullt så många möjligheter som om man använder ett front end-ramverk.

```elixir
# In your confi/assets/blogg/config.exs file
config :my_app, ecto_repos: [Sample.Repo]

config :my_app, Sample.Repo,
  database: "ecto_simple",
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  port: "5432"

# In your application code
defmodule Sample.Repo do
  use Ecto.Repo,
    otp_app: :my_app,
    adapter: Ecto.Adapters.Postgres
end

defmodule Sample.Weather do
  use Ecto.Schema

  schema "weather" do
    field :city     # Defaults to type :string
    field :temp_lo, :integer
    field :temp_hi, :integer
    field :prcp,    :float, default: 0.0
  end
end

defmodule Sample.App do
  import Ecto.Query
  alias Sample.{Weather, Repo}

  def keyword_query do
    query =
      from w in Weather,
           where: w.prcp > 0 or is_nil(w.prcp),
           select: w

    Repo.all(query)
  end

  def pipe_query do
    Weather
    |> where(city: "Kraków")
    |> order_by(:temp_lo)
    |> limit(10)
    |> Repo.all
  end
end
```

Exempel på hur Elixir-kod kan användas för att skapa objekt i en databas.

Under de år som jag använt Elixir i produktionsmiljöer så har vi inte sett någon nertid relaterad till problem med Elixir (det har istället varit problem med underliggande infrastruktur eller helt enkelt logiska buggar i koden) så betyder det inte att Elixir är perfekt. Trots de fördelar som finns med språket så är det fortfarande ganska litet och skiljer sig mycket i hur det är designat och fungerar från andra språk. Det innebär att det kan ta lite tid att komma igång för utvecklare som kommer från de programmeringsspråk som vanligtvis används. En ny paradigm (funktionell programmering) kan vara en svår omställning för dem som enbart arbetat med imperativa eller objektorienterade språk (som C eller Java).

Så, borde jag använda Elixir till mitt nästa projekt? Det är en fråga som är svår att svara på utan att veta mer, men om de utmaningar du har handlar om att stödja uppdateringar i realtid mellan webbklienter eller att snabbt hantera flera strömmar av data är det absolut ett språk du borde undersöka närmare.

Nästa inlägg kommer jag gå igenom hur man kan använda Elixir för att lägga till realtidsstöd i sin webbapp. För den som är mer nyfiken på Elixir kan jag rekommendera följande läsning:

- [Elixir Tutorial](https/assets/blogg//elixir-lang.or/assets/blogg/getting-starte/assets/blogg/introduction.html) – Går igenom grunderna i Elixir
- [Nerves Project](https/assets/blogg//www.nerves-project.or/assets/blogg/) – Ett ramverk för att använda Elixir för inbyggda system
- [Phoenix Framework](https/assets/blogg//www.phoenixframework.or/assets/blogg/) – Ett ramverk för att använda Elixir på webben
- [Adopting Elixir](https/assets/blogg//pragprog.co/assets/blogg/boo/assets/blogg/tvmelixi/assets/blogg/adopting-elixir) – En bok som går igenom hur man på bästa sätt introducerar Elixir (och Phoenix)
- [Realtime Phoenix](https/assets/blogg//pragprog.co/assets/blogg/boo/assets/blogg/sbsocket/assets/blogg/real-time-phoenix) – En bok som går igenom hur man kan använda Phoenix för att bygga realtidstjänster för webben
- [Building a Twitter clone with Phoenix Live View](https/assets/blogg//www.youtube.co/assets/blogg/watch?v=MZvmYaFkNJI&feature=emb_title) – En video som visar hur man kan använda Phoenix Live View på ett enkelt sätt

_Inlägget är skrivet av Mattias Lundberg, senior systemutvecklare och arkitekt hos Code Labs._

Vill du arbeta med Elixir, eller vill ditt företag ha hjälp att bygga mjukvara med Elixir? Kontakta Code Labs [här](mailto:contact@codelabs.se)!
