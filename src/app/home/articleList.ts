export interface Article {
  id: number;
  name: string;
  subtitle: string;
  description: string;
}

export const ARTICLE_MOCK: Article[] = new Array(3)
  .fill({})
  .map(
    (c: Article, i: number) =>
      ({
        id: i,
        name: `Lorem ipsum.`,
        url:`https://github.com/ShilpaLalwani/routing-animation/blob/master/src/img1.jpg`,
        subtitle: `More lorem ipsum bacon ipsum.`,
        description: `Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken.`,
      } as Article),
  )

  


