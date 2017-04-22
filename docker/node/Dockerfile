# Main Image
FROM node:6.10.2-wheezy

# Environment Variables
ENV USER node
ENV APP_NAME app
ENV VERSION 0.5

# Paths
ENV YARN_PATH /tmp/cache/yarn/
ENV USER_PATH /home/$USER/
ENV APP_PATH $USER_PATH$APP_NAME/

# Switch to $USER
USER $USER

# Feed my bash history
RUN echo "cd ${APP_PATH}" >> $USER_PATH.bash_history
RUN echo "ls -la" >> $USER_PATH.bash_history

ADD ./ps1 /tmp/ps1

# If don't want colors then comment the two lines below...
RUN sed -i '1s/^/force_color_prompt=yes \n/' $USER_PATH.bashrc
RUN cat /tmp/ps1 >> $USER_PATH.bashrc

# Yarn Configuration
RUN mkdir -p $YARN_PATH \
    && chmod -R 775 $YARN_PATH \
    && yarn config set cache-folder $YARN_PATH

# App Folder
RUN mkdir -p $APP_PATH \
    && chmod -R 775 $APP_PATH

# Set Workdir
WORKDIR $APP_PATH

# Expose default port
EXPOSE 3000

# Exec node
CMD node
