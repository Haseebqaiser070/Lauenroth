import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
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
  Dialog,
} from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';

// components
import Label from '../../components/label';
import Iconify from '../../components/iconify';
import Scrollbar from '../../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../../sections/@dashboard/user';
// mock
import USERLIST from '../../_mock/user';
import { toast } from 'react-toastify';
import Confirm from 'src/components/Confirmations/Confirm';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'company', label: 'Company', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  // { id: 'isVerified', label: 'Verified', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

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

export default function CourseList({ categoryTitle }) {
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
  const handleOpenDeleteDialog = () => {
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setOpen(null);
  };
  const handleOpenCourseMenu = (event) => {
    setOpenCourse(event.currentTarget);
  };

  const handleCloseCourseMenu = () => {
    setOpen(null);
  };
  const handleCloseView = () => {
    setOpenView(null);
  };
  const handleOpenView = (event) => {
    setOpenView(true);
  };
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;

  const deleteData = () => {
    toast.success('Course deleted successfully');
    handleCloseDeleteDialog();
  };

  const navigate = useNavigate();
  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
        <Typography variant="h5">Courses:</Typography>
        {/* <div>
          <Button variant="contained" className="me-4">
            Edit
          </Button>
          <Link to="/dashboard/addcourse">
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
              Add New Course
            </Button>
          </Link>
        </div> */}
      </Stack>
      <Confirm
        title="Are you sure you want to delete this content?"
        subtitle={'Changes will be permanent.'}
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        onConfirm={deleteData}
      />

      <Dialog open={Boolean(openView)} onClose={handleCloseView} fullWidth maxWidth="lg">
        <DialogTitle>
          Course <Iconify icon="icon-park-outline:right" /> Movement <Iconify icon="icon-park-outline:right" /> Workout
          <Typography mt={1}>5 Videos</Typography>
        </DialogTitle>
        <DialogContent>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table style={{ borderCollapse: 'separate', borderSpacing: '0px 20px' }}>
              {/* <UserListHead
              order={order}
              orderBy={orderBy}
              headLabel={TABLE_HEAD}
              rowCount={USERLIST.length}
              numSelected={selected.length}
              onRequestSort={handleRequestSort}
              onSelectAllClick={handleSelectAllClick}
            /> */}
              <TableBody>
                {[1, 2, 3, 4, 5].map((id) => {
                  return (
                    <TableRow hover key={id} tabIndex={-1} role="checkbox">
                      {/* <TableCell padding="checkbox">
                      <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, name)} />
                    </TableCell> */}

                      <TableCell className="first-cell" component="th" scope="row" padding="none">
                        <Stack>
                          <Link to="/dashboard/view_courses">
                            <div
                              className="rounded"
                              role="button"
                              style={{
                                width: '170px',
                                maxHeight: '100px',
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
                                src="https://hips.hearstapps.com/hmg-prod/images/running-is-one-of-the-best-ways-to-stay-fit-royalty-free-image-1036780592-1553033495.jpg?crop=0.88976xw:1xh;center,top&resize=200:*"
                                alt=""
                              />
                              <Iconify
                                icon="octicon:play-24"
                                style={{ position: 'absolute' }}
                                className="text-white"
                                width="40px"
                                height="40px"
                              />
                            </div>
                          </Link>
                        </Stack>
                      </TableCell>
                      <TableCell align="left">Headline</TableCell>
                      <TableCell align="left">
                        <Iconify icon="ri:time-line" style={{ marginBottom: '4px' }} /> 10:04 Mins
                      </TableCell>
                      <TableCell align="left">Workout</TableCell>
                      <TableCell align="left">Movement</TableCell>
                      <TableCell align="left">12,10,2023</TableCell>

                      {/* <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell> */}

                      <TableCell className="last-cell" align="right">
                        <Link to="/dashboard/view_courses">
                          <Iconify role="button" className="mx-2 text-primary" icon="carbon:view-filled" />
                        </Link>
                        <Link to="/dashboard/courses/add_course/1">
                          <Iconify role="button" className="mx-2 text-primary" icon="bxs:edit" />
                        </Link>
                        <Iconify
                          role="button"
                          className="mx-2 text-danger"
                          onClick={() => handleOpenDeleteDialog()}
                          icon="material-symbols:delete"
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseView} color="primary">
            Close
          </Button>
        </DialogActions>
        {/* <Popover
          open={Boolean(openCourse)}
          anchorEl={openCourse}
          onClose={handleCloseCourseMenu}
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
          <MenuItem>
            <Iconify icon={'carbon:view'} sx={{ mr: 2 }} />
            View
          </MenuItem>
          {/* <MenuItem>
          <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
          Edit
        </MenuItem>

          <MenuItem sx={{ color: 'error.main' }} onClick={() => handleOpenDeleteDialog()}>
            <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
            Delete
          </MenuItem>
        </Popover> */}
      </Dialog>

      {/* <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} /> */}

      <Scrollbar>
        <TableContainer sx={{ minWidth: 800 }}>
          <Table style={{ borderCollapse: 'separate', borderSpacing: '0px 20px' }}>
            {/* <UserListHead
              order={order}
              orderBy={orderBy}
              headLabel={TABLE_HEAD}
              rowCount={USERLIST.length}
              numSelected={selected.length}
              onRequestSort={handleRequestSort}
              onSelectAllClick={handleSelectAllClick}
            /> */}
            <TableBody>
              {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                const { id, name, role, status, company, avatarUrl } = row;
                const selectedUser = selected.indexOf(name) !== -1;

                return (
                  <TableRow
                    style={{ border: '1px solid black' }}
                    hover
                    key={id}
                    tabIndex={-1}
                    role="checkbox"
                    selected={selectedUser}
                  >
                    {/* <TableCell padding="checkbox">
                      <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, name)} />
                    </TableCell> */}

                    <TableCell className="first-cell" component="th" scope="row" padding="none">
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar sx={{ height: '22px', width: '22px', marginLeft: '24px' }} alt={name} src={avatarUrl} />
                        <Typography variant="subtitle2" noWrap>
                          {name}
                        </Typography>
                      </Stack>
                    </TableCell>

                    <TableCell align="left">{'Course Title'}</TableCell>
                    <TableCell align="right">{'Category'}</TableCell>

                    <TableCell align="right">{role}</TableCell>

                    {/* <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell> */}

                    <TableCell className="last-cell" align="right">
                      <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                        <Iconify icon={'eva:more-vertical-fill'} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>

            {isNotFound && (
              <TableBody>
                <TableRow>
                  <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                    <Paper
                      sx={{
                        textAlign: 'center',
                      }}
                    >
                      <Typography variant="h6" paragraph>
                        Not found
                      </Typography>

                      <Typography variant="body2">
                        No results found for &nbsp;
                        <strong>&quot;{filterName}&quot;</strong>.
                        <br /> Try checking for typos or using complete words.
                      </Typography>
                    </Paper>
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </Scrollbar>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={USERLIST.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

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
        <MenuItem className="popover-item" onClick={() => handleOpenView()}>
          <Iconify icon={'carbon:view'} sx={{ mr: 2 }} />
          View
        </MenuItem>
        <MenuItem onClick={() => navigate('/dashboard/courses/add_course/1')} className="popover-item">
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
