# Prerequisites

## Fetch GraphQL Documents

```shell
cd <SOME_FOLDER>
git clone https://github.com/ycjqf/sts-tools.git

git clone https://github.com/stashapp/stash.git --branch v0.16.0 --single-branch
mv ./stash/graphql ./sts-tools/graphql
rm -rf stash && cd ./sts-tools
```

## Build Image

```shell
docker build -t sts-tools:1.0 .
# for cross arch
docker buildx build --platform=linux/arm64 -t sts-tools:1.0 .

docker run -d -p 443:8798 --name sts-tools sts-tools:1.0
```

## Solve CORS

nginx config file for mac(arm) installed by homebrew, it shall be `/opt/homebrew/etc/nginx/nginx.conf`.

```conf
server {
    listen       4041;
    server_name  sts-tools;

    location /graphql {
        add_header 'Access-Control-Allow-Headers' '*';
        add_header 'Access-Control-Allow-Methods' '*';
        add_header 'Access-Control-Allow-Credentials' 'true';
        if ($request_method = 'OPTIONS') {
            add_header 'Access-Control-Allow-Headers' '*';
            add_header 'Access-Control-Allow-Origin' '*';
            return 204;
        }
        proxy_pass  http://localhost:9999/graphql;
    }
}
```
