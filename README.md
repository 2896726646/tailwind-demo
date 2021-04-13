# tailwind-demo

此为`tailwind`的使用`demo`，让写`css` `效率倍增`

## 初次使用方法

### 1、安装`nvm`

-   Windows 版本：[nvm](https://github.com/coreybutler/nvm-windows/releases)

-   其他操作系统：自行网上搜索

### 2、安装`npm`

-   `Windows10`系统：`Windows+S`快捷键搜索`Windows PowerShell`，请运行`nvm list availible`以查找可安装版本，运行安装命令`nvm install 15.5.1`，此命令会安装`nodejs 15.5.1`版本以及对应版本的`npm`，安装完成根据提示运行命令`nvm use 15.5.1`将安装的版本设置为当前使用版本

    ```
    nvm list available
    ```

    ```
    nvm install 15.5.1
    ```

    ```
    nvm use 15.5.1
    ```

-   其他操作系统：自行网上搜索

### 3、安装`npm`依赖包

-   以`VSCode`为例：选中`tailwind-demo`文件夹，右键`在集成终端中打开`，执行`npm install`或`npm i`安装依赖

    ```
    npm install
    ```

### 4、使用`tailwind`

`public`里为最终使用的文件，以`/public/index.html`为例

-   引入`css`文件，此`css`文件为最终编译后的文件

    ```html
    <link rel="stylesheet" href="./css/app.css" />
    ```

-   知道要使用的样式对应的`class`名是什么，可通过[tailwindcss](https://tailwindcss.com/docs/)官网查找`class`

    ```html
    <div class="text-red-500 md:text-yellow-400">Logo</div>
    ```

-   在终端中运行以下命令，提取`class`到`/public/css/app.css`中

    -   测试环境，提取所有`class`（启用 `JIT` 模式情况下，仅提取使用到的`class`，并且可以使用类名自定义值，如 `sm:w-[168px]、md:w-[calc(100%-168px)]`）
        ```
        npm run dev
        ```
    -   生产环境（线上环境），仅提取`使用到`的`class`
        ```
        npm run prod
        ```

### 5、上线项目

-   `public`里的所有文件即为最终使用的文件
