---
title: REST API
template: usermanual-page.tmpl.html
position: 12
---

<div class="alert alert-info">
    The REST API is currently in beta. This means we may change certain endpoints and API responses.
</div>

PlayCanvas offers a REST API for developers with [Organization Accounts][1]. You can use the API to programmatically access your Projects, publish or download Apps and more.

## Authorization

You can only access the REST API via https. In order to access the REST API you need to use an Access Token. You can generate an Access Token by going to your Organization's Account page. In the API Tokens section click on Generate Token. Give your token a name and click the button to create your new token. A new window will appear showing you your new access token.

Make sure you note that down because you will not be able to see the token once you close this window. This token is meant to be kept secret so do not share it with anyone other than your team (for example do not post this on forums).

From your Account page you can also Revoke all the tokens you have generated or a specific one. You can also edit the name of a token.

When you make calls to the API you must set the 'Authorization' header in your HTTP request to this value:

```none
Bearer [access_token]
```

Replace `[access_token]` with an Access Token you generated in your Account page.

For example:

```none
curl -H "Authorization: Bearer nesgdxhiqe7hylfilr6ss1rds0gq1uj8" https://playcanvas.com/api/...
```

## Parameters

Various routes accept a number of parameters. For GET requests if the parameter is not part of the URL, you can pass it as an HTTP query string parameter. For POST, PUT and DELETE requests parameters not included in the URL should be encoded as JSON with a Content-Type of 'application/json'.

## Response Format

Our REST API is following some generic guidelines when it comes to the response format of each API call.

#### GET resource

If you are trying to GET a single resource the response will be a JSON object with the resource you requested.

#### GET multiple resources

If you are trying to GET multiple resources like for example listing the Apps of a Project you will get a JSON object with this format:

```none
{
    "result": [
        resource_1,
        resource_2,
        ...,
        resource_N
    ],
    "pagination": {
        "limit": number,
        "skip": number,
        "total": number
    }
}
```

As you can notice the response in this case also contains pagination data. To control the pagination of the response you can pass the following URL parameters:

<div class="params">
<div class="parameter"><span class="param">limit</span><p>The maximum number of items to include in the response.</p></div>
<div class="parameter"><span class="param">skip</span><p>The number of items to skip from the original result set.</p></div>
<div class="parameter"><span class="param">sort</span><p>The name of the field to use to sort the result set. See the documentation of each request to see which values are allowed here.</p></div>
<div class="parameter"><span class="param">order</span><p>If you want results in ascending order pass 1 otherwise pass -1 for descending order.</p></div>
</div>

So for example to get 32 items after the first 16 items you would send this request:

```none
https://playcanvas.com/api/items?limit=32&amp;skip=16
```

#### Errors

When an error is raised you will get a JSON object with this format:

```none
{
    "error": "This is the error message"
}
```

Also the status code of the response will be the appropriate HTTP error code.

## Rate Limiting

Calls to the REST API have a rate limit. There are different rate limits depending on the request:

* **normal:** The normal rate limit allows 120 requests per minute.
* **strict:** The strict rate limit allows 5 requests per minute.

The response will contain the following headers to help you regulate how often you call the API:

<div class="params">
<div class="parameter"><span class="param">X-RateLimit-Limit</span><p>The number of requests allowed in a minute.</p></div>
<div class="parameter"><span class="param">X-RateLimit-Remaining</span><p>The remaining number of requests that you are allowed to make this minute.</p></div>
<div class="parameter"><span class="param">X-RateLimit-Reset</span><p>The time at which the current rate limit window resets in <a href="https://en.wikipedia.org/wiki/Unix_time" target="_blank">UTC epoch seconds</a>.</p></div>
</div>

If you exceed the rate limit you will get a `429 Too Many Requests` status code. You will have to wait for the current window to reset in order to continue making requests.

[1]: /user-manual/organizations

