### Cors Stash

Add code below to nginx config file. For homebrew(apple sillicon) installed, its gonna be `/opt/homebrew/etc/nginx/nginx.conf`. Change the proxy_pass by neede.

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
