# Changelog

All notable changes to the Helium MCP Server will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.0.0] - 2026-04-10

### Added
- Initial public release of Helium MCP Server
- 9 tools: search_news, search_balanced_news, get_source_bias, get_bias_from_url, get_ticker, get_option_price, get_top_trading_strategies, get_all_source_biases, search_memes
- Streamable HTTP transport at `https://heliumtrades.com/mcp`
- Free tier: 50 queries with no API key required
- Pay-as-you-go: $0.02 per query with Stripe API key
- 3.2M+ articles from 5,000+ sources with 15+ bias dimensions
- AI-powered options pricing with probability ITM
- Compatible with Cursor, Claude Desktop, and any MCP client
