---
title: Projects - Get project
---

## Route URL

```none
GET https://playcanvas.com/api/projects/:projectId
```

## Description

Get the details of a single project.

## Example

```bash
curl -H "Authorization: Bearer {accessToken}" https://playcanvas.com/api/projects/{projectId}
```

## Parameters

| Name        | Type     | Required | Default | Description            |
| ----------- | -------- | :------: | :-----: | ---------------------- |
| `projectId` | `number` |   ✔️     |   —     | The id of the project. |

## Response Schema

```none
Status: 200
```

```json
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
```

## Errors

| Code | Description       |
| ---- | ----------------- |
| 401  | Unauthorized      |
| 403  | Forbidden         |
| 404  | Project not found |
| 429  | Too many requests |

## Rate Limiting

This route uses a [normal][1] rate limit.

[1]: /user-manual/api#rate-limiting
