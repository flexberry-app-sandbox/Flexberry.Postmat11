﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Postmat11
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Ячейка.
    /// </summary>
    // *** Start programmer edit section *** (Ячейка CustomAttributes)

    // *** End programmer edit section *** (Ячейка CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЯчейкаE", new string[] {
            "НомерЯчейки as \'Номер ячейки\'",
            "Хранение as \'Хранение\'",
            "Хранение.ДатаНачала as \'Начала\'",
            "Хранение.ДатаЗавершения as \'конец\'",
            "Хранение.Продления as \'Продления\'"}, Hidden=new string[] {
            "Хранение.ДатаНачала",
            "Хранение.ДатаЗавершения",
            "Хранение.Продления"})]
    [MasterViewDefineAttribute("ЯчейкаE", "Хранение", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Продления")]
    public class Ячейка : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерЯчейки;
        
        private IIS.Postmat11.Хранение fХранение;
        
        private IIS.Postmat11.Постамат fПостамат;
        
        // *** Start programmer edit section *** (Ячейка CustomMembers)

        // *** End programmer edit section *** (Ячейка CustomMembers)

        
        /// <summary>
        /// НомерЯчейки.
        /// </summary>
        // *** Start programmer edit section *** (Ячейка.НомерЯчейки CustomAttributes)

        // *** End programmer edit section *** (Ячейка.НомерЯчейки CustomAttributes)
        public virtual int НомерЯчейки
        {
            get
            {
                // *** Start programmer edit section *** (Ячейка.НомерЯчейки Get start)

                // *** End programmer edit section *** (Ячейка.НомерЯчейки Get start)
                int result = this.fНомерЯчейки;
                // *** Start programmer edit section *** (Ячейка.НомерЯчейки Get end)

                // *** End programmer edit section *** (Ячейка.НомерЯчейки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Ячейка.НомерЯчейки Set start)

                // *** End programmer edit section *** (Ячейка.НомерЯчейки Set start)
                this.fНомерЯчейки = value;
                // *** Start programmer edit section *** (Ячейка.НомерЯчейки Set end)

                // *** End programmer edit section *** (Ячейка.НомерЯчейки Set end)
            }
        }
        
        /// <summary>
        /// Ячейка.
        /// </summary>
        // *** Start programmer edit section *** (Ячейка.Хранение CustomAttributes)

        // *** End programmer edit section *** (Ячейка.Хранение CustomAttributes)
        [PropertyStorage(new string[] {
                "Хранение"})]
        [NotNull()]
        public virtual IIS.Postmat11.Хранение Хранение
        {
            get
            {
                // *** Start programmer edit section *** (Ячейка.Хранение Get start)

                // *** End programmer edit section *** (Ячейка.Хранение Get start)
                IIS.Postmat11.Хранение result = this.fХранение;
                // *** Start programmer edit section *** (Ячейка.Хранение Get end)

                // *** End programmer edit section *** (Ячейка.Хранение Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Ячейка.Хранение Set start)

                // *** End programmer edit section *** (Ячейка.Хранение Set start)
                this.fХранение = value;
                // *** Start programmer edit section *** (Ячейка.Хранение Set end)

                // *** End programmer edit section *** (Ячейка.Хранение Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Postmat11.Постамат.
        /// </summary>
        // *** Start programmer edit section *** (Ячейка.Постамат CustomAttributes)

        // *** End programmer edit section *** (Ячейка.Постамат CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Постамат"})]
        public virtual IIS.Postmat11.Постамат Постамат
        {
            get
            {
                // *** Start programmer edit section *** (Ячейка.Постамат Get start)

                // *** End programmer edit section *** (Ячейка.Постамат Get start)
                IIS.Postmat11.Постамат result = this.fПостамат;
                // *** Start programmer edit section *** (Ячейка.Постамат Get end)

                // *** End programmer edit section *** (Ячейка.Постамат Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Ячейка.Постамат Set start)

                // *** End programmer edit section *** (Ячейка.Постамат Set start)
                this.fПостамат = value;
                // *** Start programmer edit section *** (Ячейка.Постамат Set end)

                // *** End programmer edit section *** (Ячейка.Постамат Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЯчейкаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЯчейкаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЯчейкаE", typeof(IIS.Postmat11.Ячейка));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Ячейка.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfЯчейка CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfЯчейка CustomAttributes)
    public class DetailArrayOfЯчейка : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Postmat11.DetailArrayOfЯчейка members)

        // *** End programmer edit section *** (IIS.Postmat11.DetailArrayOfЯчейка members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Ячейка by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Ячейка.
        /// </summary>
        public DetailArrayOfЯчейка(IIS.Postmat11.Постамат fПостамат) : 
                base(typeof(Ячейка), ((ICSSoft.STORMNET.DataObject)(fПостамат)))
        {
        }
        
        public IIS.Postmat11.Ячейка this[int index]
        {
            get
            {
                return ((IIS.Postmat11.Ячейка)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Postmat11.Ячейка dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
