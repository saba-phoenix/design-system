import React from 'react';
import { IconButton } from '../components/IconButton';
import { Container } from '../components/Container';
import { Box } from '../components/Box';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';
import { Badge } from '../UI/Badge';
import Modal from '../UI/Modal';
// import Select from '../UI/select/index';
import Select from '../UI/select2/index';
import Dropdown from '../UI/dropdown/index';
import DropdownSelect from '../UI/dropdown-select/index';

// import { Sortable } from '../UI/sortable/sortable';
import { Switch } from '../components/Switch';
import { ControlGroup } from '../components/ControlGroup';
import { Text } from '../UI/Text';
import { Demo } from '../UI/Demo';
import { Input } from '../UI/Input';
import { SelectDemo } from '../UI/Select';
import { Button } from '../UI/Button';
import { Link } from '../components/Link';
import { AppBar } from '../components/AppBar';
import { TextArea } from '../components/TextArea';
import { Image } from '../components/Image';
import { Code } from '../components/Code';
import { Sup } from '../components/Sup';
import { Sub } from '../components/Sub';
import { TextField } from '../components/TextField';
import { Section } from '../components/Section';
import { Avatar } from '../components/Avatar';
import { TabLink } from '../components/TabLink';
import { SimpleToggle } from '../components/SimpleToggle';
import { ScrollArea } from '../components/Scrollbar';
import { Tooltip } from '../components/Tooltip';
import { Slider } from '../components/Slider';
import { Dialog, DialogTrigger, DialogContent } from '../components/Dialog';
import { Sheet, SheetTrigger, SheetContent } from '../components/Sheet';
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from '../components/Popover';
import { Checkbox } from '../components/Checkbox';
import { RadioGroup, Radio } from '../components/Radio';
import { ProgressBar } from '../components/ProgressBar';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '../components/AlertDialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/Tabs';
import { Label } from '../components/Label';
import { Skeleton } from '../components/Skeleton';
import { RadioCardGroup, RadioCard } from '../components/RadioCard';
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from '../components/Accordion';
import { Heading } from '../components/Heading';
import { Paragraph } from '../components/Paragraph';
// import { Color } from '../custom/Color';
import { Avatars } from '../custom/Avatars';
import { Kbds } from '../custom/Kbds';
import { Menus } from '../custom/Menus';
import { Status } from '../components/Status';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '../components/DropdownMenu';
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuGroup,
  ContextMenuRadioGroup,
  ContextMenuLabel,
  ContextMenuSeparator,
} from '../components/ContextMenu';
import {
  ActivityLogIcon,
  ArrowRightIcon,
  BarChartIcon,
  CaretDownIcon,
  CheckIcon,
  CodeIcon,
  CommitIcon,
  Cross1Icon,
  ExclamationTriangleIcon,
  FontItalicIcon,
  FontStyleIcon,
  GearIcon,
  HeadingIcon,
  LetterCaseCapitalizeIcon,
  LetterCaseLowercaseIcon,
  LetterCaseUppercaseIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ReaderIcon,
  ShadowNoneIcon,
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TriangleUpIcon,
  VideoIcon,
  RocketIcon,
} from '@radix-ui/react-icons';
import { Toolbar } from '../custom/Toolbar';
import { DarkThemeButton } from '../custom/DarkThemeButton';
// import { verticalListSortingStrategy } from '@dnd-kit/sortable';

function Potion() {
  return (
    <Box>
      <DarkThemeButton />

      <AppBar size="2" color="loContrast" border sticky glass>
        <Button variant="minimal">Button</Button>
      </AppBar>
      {/* <Box
        css={{
          position: 'fixed',
          top: '$7',
          left: 0,
          bottom: 0,
          overflowY: 'auto',
          width: 250,
          px: '$6',
          py: '$6',
        }}
      >
        <Heading>Quick nav</Heading>
        <Box as="ul" css={{ p: 0 }}>
          <Box css={{ my: '$1' }}>
            <Link href="#controlgroup" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text variant="dog">Control Group</Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#text" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text variant="skinnyDog">Text</Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#button" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text variant="skinnyDog">Button</Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#badge" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text variant="skinnyDog">Badge</Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#input" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text variant="skinnyDog">Input</Text>
            </Link>
          </Box>
          <Box css={{ my: '$1' }}>
            <Link href="#select" variant="subtle" css={{ display: 'inline-flex' }}>
              <Text variant="skinnyDog">Select</Text>
            </Link>
          </Box>
        </Box>
      </Box> */}

      <Box css={{ bc: '$loContrast', height: '100%' }}>
        <Section size="3">
          <Container size="2">
            <Heading id="text" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Text
            </Heading>
            <Flex direction="column" gap="4">
              <Text variant="hamster" color="#454545">
                Hamster
              </Text>
              <Text variant="rabbit" color="#454545">
                Rabit
              </Text>
              <Text variant="skinnyDog" color="#454545">
                Skinny Dog
              </Text>
              <Text variant="dog" color="#454545">
                Dog
              </Text>
              <Text variant="fatDog" color="#454545">
                Fat Dog
              </Text>

              <Text variant="wolf" color="#454545">
                Wolf
              </Text>
              <Text variant="moose" color="#454545">
                Moose
              </Text>

              <Text variant="bear" color="#454545">
                Bear
              </Text>

              <Text variant="skinnyElephant" color="#454545">
                Skinny Elephant
              </Text>

              <Text variant="elephant" color="#454545">
                Elephant
              </Text>
            </Flex>
          </Container>
        </Section>

        <Section size="3">
          <Container size="2">
            <Heading id="button" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Button
            </Heading>
            <Button variant="primary">Button</Button>
            <br></br>
            <br></br>
            <Button variant="secondary">Button</Button>
            <br></br>
            <br></br>
            <Button variant="secondary">Button</Button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Button variant="secondary">Button</Button>
            <br></br>
            <br></br>
            <Button variant="minimal">Button</Button>

            <br></br>
            <br></br>
            <Button variant="primaryPlusIcon">Button!</Button>
            <br></br>
            <br></br>
            <Button variant="secondaryPlusIcon">Button!</Button>
            <br></br>
            <br></br>
            <Button variant="secondaryIcon" />
            <br></br>
            <br></br>
            <Button variant="secondaryIconSmall" />
            <br></br>
            <br></br>
            <Button variant="minimalPlusIcon"> Minimal Icon!</Button>
            <br></br>
            <br></br>
            <Button variant="minimalIcon" />
            <br></br>
            <br></br>
            <Button variant="minimalIconSmall" />
            <br></br>
            <br></br>
            <Button variant="primary" disabled>
              {' '}
              Button
            </Button>
            <br></br>
            <br></br>
            <Button variant="primaryPlusIcon" disabled>
              Button
            </Button>
          </Container>
        </Section>

        <Section size="3">
          <Container size="2">
            <Heading id="badge" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Badge
            </Heading>
            <Badge variant="A">Phase A</Badge>
            <br></br>
            <br></br>
            <Badge variant="B">Phase B</Badge>
            <br></br>
            <br></br>
            <Badge variant="C">Phase c</Badge>
            <br></br>
            <br></br>
            <Badge variant="D">Phase D</Badge>
            <br></br>
            <br></br>
            <Badge variant="E">Phase E</Badge>
            <br></br>
            <br></br>
            <Badge variant="F">Phase F</Badge>
            <br></br>
            <br></br>
            <Badge variant="G">Phase G</Badge>
            <br></br>
            <br></br>
            <Badge variant="H">Phase H</Badge>
            <br></br>
            <br></br>
            <Badge variant="I">Phase I</Badge>
            <br></br>
            <br></br>
            <Badge variant="J">Phase J</Badge>
            <br></br>
            <br></br>
            <Badge variant="K">Phase K</Badge>
            <br></br>
            <br></br>
            <Badge variant="L">Phase L</Badge>
            <br></br>
            <br></br>
            <Badge variant="M">Phase M</Badge>
            <br></br>
            <br></br>
            <Badge variant="N">Phase N</Badge>
            <br></br>
            <br></br>
            <Badge variant="O">Phase O</Badge>
            <br></br>
            <br></br>
            <Badge variant="P">Phase P</Badge>
            <br></br>
            <br></br>
            <Badge variant="Q">Phase Q</Badge>
          </Container>
        </Section>

        <Section size="3">
          <Container size="2">
            <Heading id="input" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Input
            </Heading>
            <Input placeholder="Enter input" />
            <br></br>
            <br></br>
            <Input placeholder="Enter input" error={true} />
            <br></br>
            <br></br>
            <Input placeholder="Enter input" label="Product Code" />
            <br></br>
            <br></br>
            <Input placeholder="Enter input" label="Product Code" status="Status" />
            <br></br>
            <br></br>
            <Input placeholder="Enter input" status="Status" />
            <br></br>
            <br></br>
            <Input placeholder="Enter input" label="Product Code" status="Status" width="200px" />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Container>
        </Section>

        <Section size="3">
          <Container size="2">
            <Heading id="select" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Select
            </Heading>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Flex direction="row" css={{ gap: '100px' }}>
              <Select type="single" placeholder={'Select Input'}>
                <Select.Item key="1"> Placeholder1</Select.Item>
                <Select.Item> Placeholder 2 </Select.Item>
                <Select.Item> Placeholder 3 </Select.Item>
                <Select.Item> Placeholder 4 </Select.Item>
              </Select>
              <Select type={'multi'} placeholder={'Select Input y'}>
                <Select.Item> Placeholder 1 </Select.Item>
                <Select.Item> Placeholder 2 </Select.Item>
                <Select.Item> Placeholder 3 </Select.Item>
                <Select.Item> Placeholder 4 </Select.Item>
              </Select>
            </Flex>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* <Input placeholder="Enter input" status="Status" /> */}
            <br></br>
            <br></br>
            {/* <SelectDemo /> */}
            <br></br>
            <br></br>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <br></br>
            <br></br>
            <br></br>

            <br></br>
          </Container>
        </Section>

        <Section size="3">
          <Container size="2">
            <Heading id="dropdown" css={{ mb: '$6', scrollMarginTop: '$7' }}>
              Dropdown
            </Heading>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Flex direction="row" css={{ gap: '70px', flexWrap: 'wrap' }}>
              <DropdownSelect
                selection="single"
                width="130px"
                options={[
                  { id: 'placeholder 1', name: 'placeholder 1' },
                  { id: 'placeholder 2', name: 'placeholder 2' },
                  { id: 'placeholder 3', name: 'placeholder 3' },
                  { id: 'placeholder 4', name: 'placeholder 4' },
                ]}
              >
                <DropdownSelect.Trigger>
                  {/* <Demo isOpen={true} title="we"></Demo> */}
                  <Button variant="primaryPlusIcon">Single Select</Button>
                </DropdownSelect.Trigger>
              </DropdownSelect>

              <DropdownSelect
                selection="multiple"
                width="216px"
                options={[
                  { id: 'placeholder 1', name: 'placeholder 1' },
                  { id: 'placeholder 2', name: 'placeholder 2' },
                  { id: 'placeholder 3', name: 'placeholder 3' },
                  { id: 'placeholder 4', name: 'placeholder 4' },
                ]}
              >
                <DropdownSelect.Trigger>
                  {/* <Demo isOpen={true} title="we"></Demo> */}
                  <Button variant="secondaryPlusIcon">Multi Select</Button>
                </DropdownSelect.Trigger>
              </DropdownSelect>
              <DropdownSelect
                selection="none"
                width="114px"
                options={[
                  { id: 'placeholder 1', name: 'placeholder 1' },
                  { id: 'placeholder 2', name: 'placeholder 2' },
                  { id: 'placeholder 3', name: 'placeholder 3' },
                  { id: 'placeholder 4', name: 'placeholder 4' },
                ]}
              >
                <DropdownSelect.Trigger>
                  {/* <Demo isOpen={true} title="we"></Demo> */}
                  <Button variant="primaryPlusIcon">Menu</Button>
                </DropdownSelect.Trigger>
              </DropdownSelect>

              <DropdownSelect
                selection="multiple"
                width="216px"
                title={'Title '}
                options={[
                  { id: 'placeholder 1', name: 'placeholder 1' },
                  { id: 'placeholder 2', name: 'placeholder 2' },
                  { id: 'placeholder 3', name: 'placeholder 3' },
                  { id: 'placeholder 4', name: 'placeholder 4' },
                ]}
              >
                <DropdownSelect.Trigger>
                  {/* <Demo isOpen={true} title="we"></Demo> */}
                  <Button variant="secondaryPlusIcon">Title</Button>
                </DropdownSelect.Trigger>
              </DropdownSelect>
              <DropdownSelect
                selection="multiple"
                width="216px"
                title={'Title goes here'}
                isReset={true}
                options={[
                  { id: 'placeholder 1', name: 'placeholder 1' },
                  { id: 'placeholder 2', name: 'placeholder 2' },
                  { id: 'placeholder 3', name: 'placeholder 3' },
                  { id: 'placeholder 4', name: 'placeholder 4' },
                ]}
              >
                <DropdownSelect.Trigger>
                  <Button variant="secondaryPlusIcon">Title and reset</Button>
                </DropdownSelect.Trigger>
              </DropdownSelect>
              <DropdownSelect
                selection="multiple"
                search={true}
                width="216px"
                options={[
                  { id: 'placeholder 1', name: 'placeholder 1' },
                  { id: 'placeholder 2', name: 'placeholder 2' },
                  { id: 'placeholder 3', name: 'placeholder 3' },
                  { id: 'placeholder 4', name: 'placeholder 4' },
                ]}
              >
                <DropdownSelect.Trigger>
                  <Button variant="secondaryPlusIcon">search</Button>
                </DropdownSelect.Trigger>
              </DropdownSelect>

              <DropdownSelect
                selection="multiple"
                // search={true}
                drag
                title="title"
                width="216px"
                options={[
                  { id: 'placeholder 1', name: 'placeholder 1' },
                  { id: 'placeholder 2', name: 'placeholder 2' },
                  { id: 'placeholder 3', name: 'placeholder 3' },
                  { id: 'placeholder 4', name: 'placeholder 4' },
                ]}
              >
                <DropdownSelect.Trigger>
                  <Button variant="secondaryPlusIcon">Drag</Button>
                </DropdownSelect.Trigger>
              </DropdownSelect>
              <DropdownSelect
                selection="multiple"
                width="224px"
                search={true}
                drag
                // title="title"
                options={[
                  { id: 'placeholder 1', name: 'placeholder 1' },
                  { id: 'placeholder 2', name: 'placeholder 2' },
                  { id: 'placeholder 3', name: 'placeholder 3' },
                  { id: 'placeholder 4', name: 'placeholder 4' },
                  { id: '5', name: 'snail' },
                  { id: '6', name: 'nail' },
                  { id: '7', name: 'paper' },
                  { id: '8', name: 'balloon' },
                  { id: '9', name: 'Candy' },
                  { id: '10', name: 'rain' },
                ]}
              >
                <DropdownSelect.Trigger>
                  <DropdownSelect.SelectButton placeholder={'Select Input'} isOpen={false} />
                </DropdownSelect.Trigger>
              </DropdownSelect>

              <DropdownSelect
                selection="multiple"
                width="224px"
                search={true}
                drag
                avatar
                // title="title"
                options={[
                  { id: 'placeholder 1', name: 'placeholder 1' },
                  { id: 'placeholder 2', name: 'placeholder 2' },
                  { id: 'placeholder 3', name: 'placeholder 3' },
                  { id: 'placeholder 4', name: 'placeholder 4' },
                  { id: '5', name: 'snail' },
                  { id: '6', name: 'nail' },
                  { id: '7', name: 'paper' },
                  { id: '8', name: 'balloon' },
                  { id: '9', name: 'Candy' },
                  { id: '10', name: 'rain' },
                ]}
              >
                <DropdownSelect.Trigger>
                  <DropdownSelect.SelectButton placeholder={'Select Input'} isOpen={false} />
                </DropdownSelect.Trigger>
              </DropdownSelect>
            </Flex>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* <Input placeholder="Enter input" status="Status" /> */}
            <br></br>
            <br></br>
            {/* <SelectDemo /> */}
            <br></br>
            <br></br>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <br></br>
            <br></br>
            <br></br>

            <br></br>
          </Container>
        </Section>

        <Section size="3">
          <Container size="2">
            <Heading id="modals" css={{ fontSize: '24px', mb: '$6', scrollMarginTop: '$7' }}>
              Modals
            </Heading>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Flex direction="row" css={{ gap: '100px' }}>
              <Modal
                title="Title"
                description="This is a placeholder for the body content to show how this button may work."
                danger={false}
              />

              <Modal
                title="You are about to delete something important"
                description="This is a placeholder for the body content to show how this button may work."
                danger={true}
              />
              {/* <Select selectionMode={'multiple'} selectionBehavior="toggle">
                <Select.Item> Placeholder 1 </Select.Item>
                <Select.Item> Placeholder 2 </Select.Item>
                <Select.Item> Placeholder 3 </Select.Item>
                <Select.Item> Placeholder 4 </Select.Item>
              </Select> */}
            </Flex>

            {/* <SelectDemo /> */}
            <br></br>
            <br></br>

            <br></br>
            {/* <Input placeholder="Enter input" status="Status" /> */}
            <br></br>
            <br></br>

            <br></br>
            <br></br>
            <br></br>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <br></br>
            <br></br>
            <br></br>

            <br></br>
            <br></br>
            <br></br>

            <br></br>
          </Container>
        </Section>
        {/* <Section size="3">
          <Container size="2">
            <Heading id="modals" css={{ fontSize: '24px', mb: '$6', scrollMarginTop: '$7' }}>
              Sortable
            </Heading>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Sortable strategy={verticalListSortingStrategy} itemCount={50} handle />
 
            <br></br>
            <br></br>

            <br></br>
   
            <br></br>
            <br></br>

            <br></br>
            <br></br>
            <br></br>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <br></br>
            <br></br>
            <br></br>

            <br></br>
            <br></br>
            <br></br>

            <br></br>
          </Container>
        </Section> */}
      </Box>
    </Box>
  );
}

export default Potion;
