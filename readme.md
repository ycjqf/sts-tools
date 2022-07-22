### Cors Stash

Add code below to nginx config file. For homebrew(apple sillicon) installed, its gonna be `/opt/homebrew/etc/nginx/nginx.conf`. Change the proxy_pass by need.

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

### build image

```shell
docker build -t sts-tools:1.0 .
docker run -d -p 8798:8798 --name sts-tools sts-tools:1.0
```
