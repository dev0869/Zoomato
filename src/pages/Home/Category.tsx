import { ProductStore } from "@/features/ProductStore";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CategoryProps } from "@/types";
import ChildLayout from "@/layout/ChildLayout";
const Category = () => {
  const { Categories } = ProductStore();
  return (
    <ChildLayout>
      <p className="py-5 text-4xl text-grays">
        Inspiration for your first order
      </p>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full h-full p-2 max-w-screen"
      >
        <CarouselContent>
          {(Categories as CategoryProps[] | null)
            ?.reverse()
            .map((ele, index) => (
              <CarouselItem
                key={index}
                className="md:basis-[30%] px-4 gap-4 space-x-9 lg:basis-[20%]"
              >
                <div className="flex flex-col gap-2 items-center">
                  <div className="rounded-full overflow-hidden w-[180px]  border-2 ">
                    <img src={ele.photoUrl} alt="image" />
                  </div>
                  <p className="text-xl">{ele.categoryName}</p>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </ChildLayout>
  );
};

export default Category;
