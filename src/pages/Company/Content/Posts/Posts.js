import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  Dialog,
} from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';

// components
import Label from '../../../../components/label';
import Iconify from '../../../../components/iconify';
import Scrollbar from '../../../../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../../../../sections/@dashboard/user';
// mock
import USERLIST from '../../../../_mock/user';
import { toast } from 'react-toastify';
import Confirm from 'src/components/Confirmations/Confirm';

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'category', label: 'Category', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];

// Sample data for Posts
const PostList = [
  {
    id: 1,
    name: 'Post 1 Headline',
    category: 'Category A',
    status: 'Online',
    postedBy: 'Admin',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/running-is-one-of-the-best-ways-to-stay-fit-royalty-free-image-1036780592-1553033495.jpg?crop=0.88976xw:1xh;center,top&resize=200:*',
  },
  {
    id: 2,
    name: 'Post 2 Headline',
    category: 'Category B',
    status: 'Upcoming',
    postedBy: 'Admin',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/running-is-one-of-the-best-ways-to-stay-fit-royalty-free-image-1036780592-1553033495.jpg?crop=0.88976xw:1xh;center,top&resize=200:*',
  },
  {
    id: 3,
    name: 'Post 3 Headline',
    category: 'Category C',
    status: 'Draft',
    postedBy: 'Admin',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/running-is-one-of-the-best-ways-to-stay-fit-royalty-free-image-1036780592-1553033495.jpg?crop=0.88976xw:1xh;center,top&resize=200:*',
  },
  {
    id: 4,
    name: 'Post 4 Headline',
    category: 'Category D',
    status: 'Online',
    postedBy: 'Admin',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/running-is-one-of-the-best-ways-to-stay-fit-royalty-free-image-1036780592-1553033495.jpg?crop=0.88976xw:1xh;center,top&resize=200:*',
  },
  {
    id: 5,
    name: 'Post 5 Headline',
    category: 'Category E',
    status: 'Upcoming',
    postedBy: 'Admin',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/running-is-one-of-the-best-ways-to-stay-fit-royalty-free-image-1036780592-1553033495.jpg?crop=0.88976xw:1xh;center,top&resize=200:*',
  },
  {
    id: 6,
    name: 'Post 6 Headline',
    category: 'Category F',
    status: 'Draft',
    postedBy: 'Admin',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/running-is-one-of-the-best-ways-to-stay-fit-royalty-free-image-1036780592-1553033495.jpg?crop=0.88976xw:1xh;center,top&resize=200:*',
  },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function Posts() {
  const [value, setValue] = useState('1');
  const [open, setOpen] = useState(null);
  const [openCourse, setOpenCourse] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openView, setOpenView] = useState(null);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const [filterOption, setFilterOption] = React.useState('');

  const handleChangeFilter = (event) => {
    setFilterOption(event.target.value);
  };
  const navigate = useNavigate();

  const handleOpenDeleteDialog = () => {
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setOpen(null);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredPosts = applySortFilter(PostList, getComparator(order, orderBy), filterName);

  return (
    <>
      <Confirm
        title="Are you sure you want to delete this content?"
        subtitle={'Changes will be permanent.'}
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        onConfirm={() => {
          toast.success('Post Deleted Successfully');
          handleCloseDeleteDialog();
        }}
      />
      <div className="row d-flex mt-5 flex-wrap justify-items-between">
        <div className="col-md-5">
          <Typography variant="h4">Content: Posts </Typography>
        </div>
      </div>
      <div className="row my-3">
        <Typography>
          On this section you can see existing and upload new content straight to the app / news page.{' '}
        </Typography>
      </div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="d-flex align-items-center">
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Online" value="1" />
              <Tab label="Upcoming" value="2" />
              <Tab label="Drafts" value="3" />
            </TabList>
            <div className="text-end ms-auto">
              <FormControl sx={{ width: 120, marginRight: '12px' }} size="small">
                <InputLabel id="demo-select-small-label">Filter</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={filterOption}
                  label="Filter"
                  onChange={handleChangeFilter}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Option1</MenuItem>
                  <MenuItem value={20}>Option2</MenuItem>
                  <MenuItem value={30}>Option3</MenuItem>
                </Select>
              </FormControl>
              <Link to="/dashboard/company/add_post" className=" ms-auto">
                <Button className="py-2" variant="contained" startIcon={<Iconify icon="mingcute:add-fill" />}>
                  New post
                </Button>
              </Link>
            </div>
          </Box>
          <TabPanel sx={{ padding: '0px' }} value="1">
            <TableContainer sx={{ minWidth: 800 }}>
              <Table style={{ borderCollapse: 'separate', borderSpacing: '0px 20px' }}>
                <TableBody>
                  {filteredPosts
                    .filter((post) => post.status === 'Online')
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((post) => (
                      <TableRow hover key={post.id} tabIndex={-1} role="checkbox">
                        <TableCell className="first-cell" component="th" scope="row" padding="none">
                          <Stack>
                            <Link to={`/dashboard/company/view_post/${post.id}`}>
                              <div
                                className="rounded"
                                style={{
                                  width: '110px',
                                  marginLeft: '-8px',
                                  borderRadius: '10px',
                                  overflow: 'hidden',
                                  position: 'relative',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <img
                                  src={post.imageUrl}
                                  alt={post.name}
                                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                              </div>
                            </Link>
                          </Stack>
                        </TableCell>
                        <TableCell align="left">{post.name}</TableCell>
                        <TableCell align="right">{post.category}</TableCell>
                        <TableCell align="right">Posted By {post.postedBy}</TableCell>

                        <TableCell align="right">{post.status}</TableCell>
                        <TableCell className="last-cell" align="right">
                          <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                            <Iconify icon={'eva:more-vertical-fill'} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={filteredPosts.filter((post) => post.status === 'Online').length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(e, newPage) => setPage(newPage)}
              onRowsPerPageChange={(e) => {
                setRowsPerPage(parseInt(e.target.value, 10));
                setPage(0);
              }}
            />
          </TabPanel>
          <TabPanel sx={{ padding: '0px' }} value="2">
            <TableContainer sx={{ minWidth: 800 }}>
              <Table style={{ borderCollapse: 'separate', borderSpacing: '0px 20px' }}>
                <TableBody>
                  {filteredPosts
                    .filter((post) => post.status === 'Upcoming')
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((post) => (
                      <TableRow hover key={post.id} tabIndex={-1} role="checkbox">
                        <TableCell className="first-cell" component="th" scope="row" padding="none">
                          <Stack>
                            <Link to={`/dashboard/company/view_post/${post.id}`}>
                              <div
                                className="rounded"
                                style={{
                                  width: '110px',
                                  marginLeft: '-8px',
                                  borderRadius: '10px',
                                  overflow: 'hidden',
                                  position: 'relative',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <img
                                  src={post.imageUrl}
                                  alt={post.name}
                                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                              </div>
                            </Link>
                          </Stack>
                        </TableCell>
                        <TableCell align="left">{post.name}</TableCell>
                        <TableCell align="right">{post.category}</TableCell>
                        <TableCell align="right">Posted By {post.postedBy}</TableCell>

                        <TableCell align="right">{post.status}</TableCell>
                        <TableCell className="last-cell" align="right">
                          <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                            <Iconify icon={'eva:more-vertical-fill'} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={filteredPosts.filter((post) => post.status === 'Upcoming').length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(e, newPage) => setPage(newPage)}
              onRowsPerPageChange={(e) => {
                setRowsPerPage(parseInt(e.target.value, 10));
                setPage(0);
              }}
            />
          </TabPanel>
          <TabPanel sx={{ padding: '0px' }} value="3">
            <TableContainer sx={{ minWidth: 800 }}>
              <Table style={{ borderCollapse: 'separate', borderSpacing: '0px 20px' }}>
                <TableBody>
                  {filteredPosts
                    .filter((post) => post.status === 'Draft')
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((post) => (
                      <TableRow hover key={post.id} tabIndex={-1} role="checkbox">
                        <TableCell className="first-cell" component="th" scope="row" padding="none">
                          <Stack>
                            <Link to={`/dashboard/company/view_post/${post.id}`}>
                              <div
                                className="rounded"
                                style={{
                                  width: '110px',
                                  marginLeft: '-8px',
                                  borderRadius: '10px',
                                  overflow: 'hidden',
                                  position: 'relative',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                <img
                                  src={post.imageUrl}
                                  alt={post.name}
                                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                              </div>
                            </Link>
                          </Stack>
                        </TableCell>
                        <TableCell align="left">{post.name}</TableCell>
                        <TableCell align="right">{post.category}</TableCell>
                        <TableCell align="right">Posted By {post.postedBy}</TableCell>

                        <TableCell align="right">{post.status}</TableCell>
                        <TableCell className="last-cell" align="right">
                          <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                            <Iconify icon={'eva:more-vertical-fill'} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={filteredPosts.filter((post) => post.status === 'Draft').length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(e, newPage) => setPage(newPage)}
              onRowsPerPageChange={(e) => {
                setRowsPerPage(parseInt(e.target.value, 10));
                setPage(0);
              }}
            />
          </TabPanel>
        </TabContext>
      </Box>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem
          className="popover-item"
          onClick={() => {
            navigate('/dashboard/company/view_post');
          }}
        >
          <Iconify icon={'carbon:view'} sx={{ mr: 2 }} />
          View
        </MenuItem>
        <MenuItem className="popover-item" onClick={() => navigate('/dashboard/company/add_post/1')}>
          <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
          Edit
        </MenuItem>
        <MenuItem sx={{ color: 'error.main' }} onClick={() => handleOpenDeleteDialog()}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}
