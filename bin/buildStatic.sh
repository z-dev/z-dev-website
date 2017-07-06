rm -rf ./static && \
  mkdir ./static && \
  node bin/copyImages.js && \
  cp -r ./node_modules/bootstrap-sass/. ./static/bootstrap-sass/ && \
  cp -r ./node_modules/ionicons-pre/scss/. ./static/ionicons-scss && \
  cp -r ./node_modules/ionicons-pre/fonts/. ./static/ionicons-fonts && \
  cp -r ./node_modules/slick-carousel/slick/ ./static/slick-carousel
