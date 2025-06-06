
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table } from "lucide-react"
import { Link } from "react-router-dom"
import { getMdxNavigationItems } from './lib/mdx-navigation'


function ExampleCardList() {
  const navigationItems = getMdxNavigationItems();
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Navigation</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {navigationItems.map((item) => (
          <Link key={item.href} to={item.href} className="block">
            <Card className="h-full hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Table className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                </div>
              </CardHeader>
              {item.description && (
                <CardContent>
                  <CardDescription className="text-sm text-muted-foreground">{item.description}</CardDescription>
                </CardContent>
              )}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
export const agGridForm2 = {
  title: "agGrid",
  type: "form",
  display: "form",
  components: [
    {
      label: "AG Grid",
      agGridConfig: {

        rowData: [
          {
            make: "Tesla",
            model: "Model Y",
            price: 64950,
            electric: true,
          },
          {
            make: "Ford",
            model: "F-Series",
            price: 33850,
            electric: false,
          },
          {
            make: "Toyota",
            model: "Corolla",
            price: 29600,
            electric: false,
          },
        ],
      },
      tableView: true,
      validateWhenHidden: false,
      key: "aggrid",
      type: "aggrid",
      input: true,
      "aggridWidth": 600,
      "aggridHeight": 400,
      components: [
        {
          label: "Make",
          applyMaskOn: "change",
          tableView: true,
          validateWhenHidden: false,
          key: "make",
          type: "textfield",
          input: true,
        },
        {
          label: "Model",
          applyMaskOn: "change",
          tableView: true,
          validateWhenHidden: false,
          key: "model",
          type: "textfield",
          input: true,
        },
        {
          label: "Price",
          applyMaskOn: "change",
          mask: false,
          tableView: false,
          delimiter: false,
          requireDecimal: false,
          inputFormat: "plain",
          truncateMultipleSpaces: false,
          validateWhenHidden: false,
          key: "price",
          type: "number",
          input: true,
        },
        {
          label: "Electric",
          tableView: false,
          defaultValue: false,
          validateWhenHidden: false,
          key: "electric",
          type: "checkbox",
          input: true,
        },
      ],
    },
    {
      type: "button",
      label: "Submit",
      key: "submit",
      disableOnInvalid: true,
      input: true,
      tableView: false,
    },
  ],
};

  



export default function Home() {
  return (
    <> 
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold">Welcome to Formio Ag-Grid Examples</h2>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">
          This project showcases how to integrate Formio with Ag-Grid, providing a powerful combination for building dynamic forms and data grids.
        </p>
      </CardContent>
    </Card>
    <ExampleCardList />
    </>
  
  );
}