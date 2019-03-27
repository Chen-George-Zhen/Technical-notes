 server {
  listen 80;
  server_name assets.mymart.com;

  location / {
    # root /mnt/data_disk_1/www/ershou_web/ershou_web_production/current/public;
    root /mnt/data_disk_1/www/ershou_web/ershou_web_production/shared/public;
    gzip_static on;
    expires max;
    add_header Cache-Control public;
    add_header Access-Control-Allow-Origin *;
  }
}

