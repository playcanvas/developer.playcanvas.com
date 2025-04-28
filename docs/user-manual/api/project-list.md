---
title: Projects - List projects
---

## Route URL

```none
GET https://playcanvas.com/api/users/:userId/projects
```

## Description

Lists all projects owned by a user.

## Example

```bash
curl -H "Authorization: Bearer {accessToken}" https://playcanvas.com/api/users/{userId}/projects
```

## Parameters

| Name      | Type     | Required | Default | Description             |
| --------- | -------- | :------: | :-----: | ----------------------- |
| `userId`  | `number` |   ✔️     |   —     | The id of the user.     |

## Response Schema

```none
Status: 200
```

```json
{
  "result": [
    {
      "id": int,
      "name": string,
      "description": string,
      "created": date,
      "modified": date,
      "owner": string,
      "owner_id": int,
      "access_level": string,
      "fork_count": int,
      "locked": bool,
      "new_owner": string|null,
      "permissions": {
        "admin": [string],
        "write": [string],
        "read": [string]
      },
      "plays": int,
      "primary_app": int,
      "primary_app_url": string,
      "private": bool,
      "size": {
        "total": int,
        "code": int,
        "apps": int,
        "assets": int,
        "checkpoints": int
      },
      "starred": int,
      "thumbnails": {
        "s": string,
        "m": string,
        "l": string,
        "xl": string
      },
      "views": int
    }
    // ...more projects...
  ]
}
```

## Errors

| Code | Description       |
| ---- | ----------------- |
| 401  | Unauthorized      |
| 403  | Forbidden         |
| 404  | User not found    |
| 429  | Too many requests |

## Rate Limiting

This route uses a [normal][1] rate limit.

[1]: /user-manual/api#rate-limiting
