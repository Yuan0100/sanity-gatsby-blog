export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6207c81800f584ee06831376",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-jh4i7e86",
                  apiId: "7f609072-b105-42b8-8ef7-0b7e67fd24bb",
                },
                {
                  buildHookId: "6207c8186f4f5d240e7adc51",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-x3hvwt5a",
                  apiId: "40f6fed8-3fc9-49a1-b32e-4dfc59c50ee6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Yuan0100/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-x3hvwt5a.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
