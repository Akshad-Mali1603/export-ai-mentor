import { useState } from 'react';
import { TextInput,  Select,  NumberInput,  Radio,  Text,  Grid,  Divider,  Group,} from '@mantine/core';
import { useForm } from '@mantine/form';

interface CommercialInvoiceFormValues {
  exporterName: string;
  productDescription: string;
  pricePerUnit: number;
  currency: string;
  destinationCountry: string;
  buyerName: string;
  quantity: number;
  unit: string;
  incoterms: string;
  shippingMode: string;
}

export default function CommercialInvoice() {
  const form = useForm<CommercialInvoiceFormValues>({
    initialValues: {
      exporterName: 'ExportCo Ltd.',
      productDescription: '',
      pricePerUnit: 12.5,
      currency: 'USD',
      destinationCountry: 'United Arab Emirates',
      buyerName: 'Global Trade Partners',
      quantity: 500,
      unit: 'Pieces',
      incoterms: 'FOB',
      shippingMode: 'Sea',
    },

    validate: {
      productDescription: (value) =>
        value.trim() === '' ? 'Product description is required' : null,
      pricePerUnit: (value) =>
        value <= 0 ? 'Price must be greater than 0' : null,
      destinationCountry: (value) =>
        value.trim() === '' ? 'Destination country is required' : null,
      buyerName: (value) =>
        value.trim() === '' ? 'Buyer name is required' : null,
      quantity: (value) =>
        value <= 0 ? 'Quantity must be greater than 0' : null,
      incoterms: (value) =>
        value.trim() === '' ? 'Incoterms is required' : null,
      shippingMode: (value) =>
        value.trim() === '' ? 'Shipping mode is required' : null,
    },
  });

  const [showOptionalFields, setShowOptionalFields] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 backdrop-blur-md shadow-xl bg-slate-100 shadow-slate-500">
      <h1 className="text-4xl font-bold text-center">Commercial Invoice</h1>
      <p className="text-slate-700 mt-2 text-center">
        Fill in the minimal information required for your commercial invoice
      </p>

      <div className=" w-full max-w-7xl mt-6 border-2 border-slate-200 rounded-xl bg-slate-50 shadow-md p-8">
        <Text className="text-2xl font-bold mb-6">Step 2: Fill Minimal Info</Text>

        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          {/* Exporter Name */}
          <div className="flex flex-col gap-1.5 pt-3">
            <label className="font-medium text-slate-600">
              Exporter Name <span className="text-red-500">*</span>
            </label>
            <TextInput
              value={form.values.exporterName}
              onChange={(event) =>
                form.setFieldValue('exporterName', event.currentTarget.value)
              }
              className="border-1 rounded-lg"
              classNames={{
                input: 'border-slate-300 focus:border-slate-500',
              }}
            />
            <p className="text-xs text-gray-500">Auto-filled from your profile</p>
          </div>

          {/* Product Description */}
          <div className="flex flex-col gap-1.5 pt-5">
            <label className="font-medium text-slate-600">
              Product Description <span className="text-red-500">*</span>
            </label>
            <TextInput
              placeholder="Organic cotton t-shirts, men's, medium size"
              {...form.getInputProps('productDescription')}
              className="border-1 rounded-lg"
              classNames={{
                input: 'border-slate-300 focus:border-slate-500',
              }}
            />
            {form.errors.productDescription && (
              <p className="text-xs text-red-500">{form.errors.productDescription}</p>
            )}
            <p className="text-xs text-gray-500">From dashboard / last product</p>
          </div>

          {/* Price per Unit */}
          <div className="flex flex-col gap-1.5 pt-5">
            <label className="font-medium text-slate-600">
              Price per Unit <span className="text-red-500">*</span>
            </label>
            <Grid>
              <Grid.Col span={9}>
                <NumberInput
                  min={0}
                  {...form.getInputProps('pricePerUnit')}
                  className="border-1 rounded-lg"
                  classNames={{
                    input: 'border-slate-300 focus:border-slate-500',
                  }}
                />
                {form.errors.pricePerUnit && (
                  <p className="text-xs text-red-500">{form.errors.pricePerUnit}</p>
                )}
              </Grid.Col>
              <Grid.Col span={3}>
                <Select
                  data={['USD', 'EUR', 'GBP', 'AED']}
                  {...form.getInputProps('currency')}
                  classNames={{
                    input: 'border-slate-300 focus:border-slate-500',
                  }}
                />
              </Grid.Col>
            </Grid>
          </div>

          <Divider className="my-6" />

          {/* Destination Country */}
          <div className="flex flex-col gap-1.5 pt-3">
            <label className="font-medium text-slate-600">
              Destination Country <span className="text-red-500">*</span>
            </label>
            <Select
              data={[
                'United Arab Emirates',
                'United States',
                'United Kingdom',
                'Germany',
                'India',
                'China',
              ]}
              {...form.getInputProps('destinationCountry')}
              className="border-1 rounded-lg"
              classNames={{
                input: 'border-slate-300 focus:border-slate-500',
              }}
            />
            {form.errors.destinationCountry && (
              <p className="text-xs text-red-500">{form.errors.destinationCountry}</p>
            )}
            <p className="text-xs text-gray-500">Last selected country</p>
          </div>

          {/* Optional Fields Toggle */}
          <div className="pt-5 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setShowOptionalFields(!showOptionalFields)}
              className="text-slate-700 hover:text-slate-900 font-medium"
            >
              {showOptionalFields ? '- Hide optional fields' : '+ Show optional fields'}
            </button>
          </div>

          <Divider className="my-6" />

          {/* Horizontal Optional Fields */}
          <div className="grid grid-cols-4 gap-6">
            {/* Buyer Name */}
            <div className="flex flex-col gap-1.5">
              <label className="font-medium text-slate-600">
                Buyer Name <span className="text-red-500">*</span>
              </label>
              <TextInput
                value={form.values.buyerName}
                {...form.getInputProps('buyerName')}
                className="border-1 rounded-lg"
                classNames={{
                  input: 'border-slate-300 focus:border-slate-500',
                }}
              />
              {form.errors.buyerName && (
                <p className="text-xs text-red-500">{form.errors.buyerName}</p>
              )}
              <p className="text-xs text-gray-500">Last verified buyer</p>
            </div>

            {/* Quantity */}
            <div className="flex flex-col gap-1.5">
              <label className="font-medium text-slate-600">
                Quantity <span className="text-red-500">*</span>
              </label>
              <NumberInput
                min={1}
                {...form.getInputProps('quantity')}
                className="border-1 rounded-lg"
                classNames={{
                  input: 'border-slate-300 focus:border-slate-500',
                }}
              />
              {form.errors.quantity && (
                <p className="text-xs text-red-500">{form.errors.quantity}</p>
              )}
            </div>

            {/* Unit */}
            <div className="flex flex-col gap-1.5">
              <label className="font-medium text-slate-600">Unit</label>
              <Select
                data={['Pieces', 'Units', 'Boxes', 'Pallets', 'Kg', 'Lbs']}
                {...form.getInputProps('unit')}
                className="border-1 rounded-lg"
                classNames={{
                  input: 'border-slate-300 focus:border-slate-500',
                }}
              />
            </div>

            {/* Incoterms */}
            <div className="flex flex-col gap-1.5">
              <label className="font-medium text-slate-600">
                Incoterms <span className="text-red-500">*</span>
              </label>
              <Select
                data={['FOB', 'CIF', 'EXW', 'DDP', 'DAP']}
                {...form.getInputProps('incoterms')}
                className="border-1 rounded-lg"
                classNames={{
                  input: 'border-slate-300 focus:border-slate-500',
                }}
              />
              {form.errors.incoterms && (
                <p className="text-xs text-red-500">{form.errors.incoterms}</p>
              )}
            </div>
          </div>

          {/* Shipping Mode - Full width below */}
          <div className="flex flex-col gap-1.5 pt-6">
            <label className="font-medium text-slate-600">
              Shipping Mode <span className="text-red-500">*</span>
            </label>
            <Group mt="xs">
              <Radio
                value="Sea"
                label="Sea"
                checked={form.values.shippingMode === 'Sea'}
                onChange={() => form.setFieldValue('shippingMode', 'Sea')}
              />
              <Radio
                value="Air"
                label="Air"
                checked={form.values.shippingMode === 'Air'}
                onChange={() => form.setFieldValue('shippingMode', 'Air')}
              />
              <Radio
                value="Road"
                label="Road"
                checked={form.values.shippingMode === 'Road'}
                onChange={() => form.setFieldValue('shippingMode', 'Road')}
              />
            </Group>
            {form.errors.shippingMode && (
              <p className="text-xs text-red-500">{form.errors.shippingMode}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
