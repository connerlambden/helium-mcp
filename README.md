# Helium MCP Server

Real-time news with bias scoring, live market data, and AI-powered options pricing — all accessible through the [Model Context Protocol](https://modelcontextprotocol.io).

[![helium-mcp MCP server](https://glama.ai/mcp/servers/connerlambden/helium-mcp/badges/card.svg)](https://glama.ai/mcp/servers/connerlambden/helium-mcp)

## Overview

Helium MCP gives your AI assistant access to:

- **3.2M+ news articles** from 5,000+ sources, each scored across 15+ bias dimensions
- **Balanced news synthesis** — left, right, and center perspectives aggregated into one coherent story
- **Live market data** — price, IV rank, AI-generated bull/bear cases, and price forecasts
- **AI options pricing** — proprietary ML models for fair-value estimates and probability ITM
- **Meme search** — semantic search across viral memes with OCR text and captions

50 free queries included. No sign-up required.

## Quick Start

### Cursor

Add to your Cursor MCP settings:

```json
{
  "mcpServers": {
    "helium": {
      "url": "https://heliumtrades.com/mcp"
    }
  }
}
```

### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "helium": {
      "type": "streamable-http",
      "url": "https://heliumtrades.com/mcp"
    }
  }
}
```

### Any MCP Client

Connect to the streamable HTTP endpoint:

```
https://heliumtrades.com/mcp
```

## Tools

### search_news

Full-text search across 3.2M+ articles from 5,000+ sources. Filter by source, category, date, and minimum shares. Returns bias scores, AI summaries, and context.

**Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `query` | string | Yes | — | Search keywords |
| `limit` | integer | No | 20 | Max results (1–100) |
| `source` | string | No | — | Filter by source name (e.g. `"CNN"`, `"Reuters"`) |
| `category` | string | No | — | One of: `trending`, `tech`, `markets`, `politics`, `business`, `science`, `memes` |
| `days_back` | integer | No | 720 | Only include articles from the last N days |
| `min_shares` | integer | No | -1 | Minimum total social shares |
| `sort` | string | No | `"rank"` | One of: `rank` (relevance), `date` (newest), `shares` (most shared) |

### search_balanced_news

AI-synthesized articles that aggregate multiple sources into balanced coverage. Each story includes a summary, takeaway, evidence breakdown, potential outcomes, and relevant tickers.

**Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `query` | string | Yes | — | Search keywords |
| `limit` | integer | No | 10 | Max results (1–50) |
| `category` | string | No | — | One of: `tech`, `politics`, `markets`, `business`, `science` |
| `days_back` | integer | No | 0 | Only include stories from the last N days (0 = no filter) |

### get_source_bias

Deep bias analysis for any news outlet: political lean, emotional tone, prescriptiveness, signature phrases, similar sources, and historical trends.

**Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `source` | string | Yes | — | Source name (e.g. `"Fox News"`) or domain (e.g. `"foxnews.com"`) |
| `recent_articles` | integer | No | 10 | Number of recent articles to include (1–50) |

### get_bias_from_url

Analyze any article URL for per-dimension bias scores: political lean, emotionality, manipulation level, factfulness, and more.

**Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `url` | string | Yes | — | Full article URL |

### get_ticker

Comprehensive data for any stock, ETF, or crypto: live price, AI-generated bull/bear cases, price forecast, IV rank, volatility surface, and top-ranked options strategies.

**Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `ticker` | string | Yes | — | Ticker symbol (e.g. `"AAPL"`, `"SPY"`, `"BTC"`) |

### get_option_price

Helium's proprietary ML model-predicted fair-value price for a specific option contract. Returns predicted price, probability ITM, and the data date.

**Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `symbol` | string | Yes | — | Ticker symbol (e.g. `"AAPL"`, `"SPY"`) |
| `strike` | number | Yes | — | Strike price (e.g. `150.0`) |
| `expiration` | string | Yes | — | Expiration date as `YYYY-MM-DD` |
| `option_type` | string | Yes | — | `"call"` or `"put"` |

### get_top_trading_strategies

Helium's highest-conviction options setups ranked by AI edge score, expected value, and market conditions. Returns both short volatility and long volatility strategies.

**Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `sort` | string | No | `"helium_rank"` | One of: `helium_rank`, `odds_of_profit`, `historical_performance`, `reward_to_risk`, `smallest_max_loss` |
| `limit` | integer | No | 5 | Results per strategy type (1–20) |

### get_all_source_biases

Bias scores for every tracked news source — compare outlets, rank by credibility, or build a full media landscape overview. Returns all sources with >100 articles analyzed, sorted by average social shares.

**Parameters:** None required.

### search_memes

Semantic search across viral memes — images, captions, OCR text, like counts, and source attribution.

**Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `query` | string | Yes | — | Search keywords (matched against OCR text and captions) |
| `limit` | integer | No | 20 | Max results (1–100) |

## Pricing

| Plan | Cost | Details |
|------|------|---------|
| **Free** | $0 | 50 queries per network — no sign-up needed |
| **Pay As You Go** | $0.02/query | Billed daily via Stripe. All 9 tools, unlimited queries. |

Get an API key at [heliumtrades.com/mcp-page](https://heliumtrades.com/mcp-page).

## Links

- [Helium MCP Page](https://heliumtrades.com/mcp-page/)
- [Helium Trades](https://heliumtrades.com)
- [Privacy Policy](https://heliumtrades.com/pp/)

## License

MIT
